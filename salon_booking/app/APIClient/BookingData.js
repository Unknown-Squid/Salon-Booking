import { IPAddress } from "../Constant/IPAddress";


const AddBooking = async (payload) => {
    try {
        const response = await fetch(`${IPAddress}/add-booking-data`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.error("Error:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

const GetBooking = async () => {
    try {
      const response = await fetch(`${IPAddress}/get-all-booking-data`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const data = await response.json(); 
        return data;
      } else {
        console.error("❌ Server responded with:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("🔥 Fetch error:", error);
    }
};
  
const GetBookingByKey = async (key, value) => {
    try {
      const response = await fetch(`${IPAddress}/get-booking-data-by-key?key=${encodeURIComponent(key)}&&value=${encodeURIComponent(value)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const data = await response.json(); 
        return data;
      } else {
        console.error("❌ Server responded with:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("🔥 Fetch error:", error);
    }
};

const GetBookingByMonth = async (month) => {
    try {
      const response = await fetch(`${IPAddress}/get-booking-data-by-month?month=${encodeURIComponent(month)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const data = await response.json(); 
        return data;
      } else {
        console.error("❌ Server responded with:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("🔥 Fetch error:", error);
    }
};
  

const UpdateBookingStatus = async (bookingData) => {
    try {
      const response = await fetch(`${IPAddress}/update-booking-data-status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error updating booking Status:", error);
    }
};

const UpdateUserBookingData = async (bookingData) => {
    try {
      const response = await fetch(`${IPAddress}/update-user-booking-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error updating booking Status:", error);
    }
};

export {
    AddBooking,
    GetBooking,
    GetBookingByKey,
    GetBookingByMonth,
    UpdateBookingStatus,
    UpdateUserBookingData
}