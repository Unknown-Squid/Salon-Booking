const BookingModel = require("../Models/BookingModel");
const { Op } = require('sequelize');


const addBookingData = async (bookingData) => {
    try {
        const newBookingData = await BookingModel.create(bookingData);
        return newBookingData; 
    } catch (err) {
        console.error("Error adding booking data:", err);
        throw err;  
    }
};

const getAllBookingData = async () => {
    try {
        return await BookingModel.findAll();
    } catch (error) {
        console.error("Error fetching booking data:", error);
        throw error;
    }
};

const getBookingDataByKey = async (key, value) => {
    try {
      // Validate that the key is a valid field name
      const validKeys = ['id', 'date', 'booking_id', "transaction_number"]; 
      if (!validKeys.includes(key)) {
        throw new Error(`Invalid key: ${key}`);
      }
  
      // Perform the dynamic query
      return await BookingModel.findAll({
        where: {
          [key]: value, // Dynamically set the key and value
        },
      });
    } catch (error) {
      console.error("Error fetching booking:", error);
      throw error;
    }
};

const getBookingDataByMonth = async (month) => {
  try {
    return await BookingModel.findAll({
      where: {
        date: {
          [Op.like]: `${month}%`,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching booking:", error);
    throw error;
  }
};

const updateBookingStatus = async (bookingData) => {
  try {
    const result = await BookingModel.update(
      {
        status: bookingData.status,
      },
      {
        where: { id: bookingData.id },
      }
    );

    return result;
  } catch (err) {
    console.error("Error updating booking status:", err);
    throw err;
  }
};

const updateUserBookingData = async (bookingData) => {
  try {
    const result = await BookingModel.update(
      {
        name: bookingData.name,
        email: bookingData.email,
        contact_number: bookingData.contact_number,
        date: bookingData.date,
        time: bookingData.time,
        stylist_name: bookingData.stylist_name,
        stylist_image: bookingData.stylist_image,
        service_type: bookingData.service_type,
        upgrades: bookingData.upgrades,
        notes: bookingData.notes,
        promo_code: bookingData.promo_code,
        paying_method: bookingData.paying_method,
        transaction_number: bookingData.transaction_number,
        total: bookingData.total,
        status: bookingData.status
      },
      {
        where: { booking_id: bookingData.booking_id },
      }
    );

    return result;
  } catch (err) {
    console.error("Error updating booking status:", err);
    throw err;
  }
};

module.exports = {
    addBookingData, 
    getAllBookingData,
    getBookingDataByKey,
    getBookingDataByMonth,
    updateBookingStatus,
    updateUserBookingData
};
