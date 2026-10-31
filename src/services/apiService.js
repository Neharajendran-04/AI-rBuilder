import axiosService from "../api/axiosService";

// save resume API : called by ResumeInput component when finish button clicks

export const saveResumeApi = async (resumeDetails) => {
     return await axiosService("POST", "/resumes", resumeDetails);
     
}
// view resume API : called by view component when the page loads inbrowser

export const viewResumeApi = async (resumeId) => {
     return await axiosService("GET", `/resumes/${resumeId}`,{}); 
}
// view all resumes API : called by Saved component when the page loads in browser
export const getResumeApi = async () => {
     return await axiosService("GET", `/resumes/`,{}); 
}
// Delete resumes API : called by Saved component when download button clicks
export const deleteAllResumeApi = async (resumeId) => {
     return await axiosService("DELETE", `/resumes/${resumeId}`,{}); 
}
// Edit resumes API : called by Edit component when edit button clicks
export const editAllResumeApi = async (resumeId, resumeDetails) => {
     return await axiosService("PUT", `/resumes/${resumeId}`,resumeDetails); 
}
// Download resumes API : called by View component when download button clicks
export const downloadResumeApi = async (resumeDetails) => {
     return await axiosService("POST", `/downloads`,resumeDetails); 
}
// Get resumes API : called by Download component when page loads in browser
export const getAllDownloadResumeApi = async () => {
     return await axiosService("GET", `/downloads`,{}); 
}
