// imports async
import AsyncStorage from "@react-native-async-storage/async-storage";

// Save a report locally (offline)
export const saveReportLocally = async (report) => {
  try {
    const existing = await AsyncStorage.getItem("reports"); // gets reports save on the device
    const reports = existing ? JSON.parse(existing) : [];  // if no reports exist reutn back into an array. if not start a new empty array

    reports.push(report); // add new report to the array

    await AsyncStorage.setItem("reports", JSON.stringify(reports)); //save the updated array back in Async storage
  } catch (error) {
    // if something goes wrong display this messafge
    console.log("Error saving report:", error); // 
  }
};

// Get all saved offline reports
export const getLocalReports = async () => {
  try {
    // get the saved reports from async storage
    const data = await AsyncStorage.getItem("reports");
    // if the data exist, return  it as array. if not return empty
    return data ? JSON.parse(data) : [];
  } catch (error) {
    // if something goes wrong display this message
    console.log("Error loading reports:", error);
    return [];
  }
};

// Clear reports after successful sync
export const clearLocalReports = async () => {
  try {
    //Delete the reports from acync storage
    await AsyncStorage.removeItem("reports");
  } catch (error) {
    // if something goes wrong display this message
    console.log("Error clearing reports:", error);
  }
};
