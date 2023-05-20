import axios from "axios";

const GET_ALL_NEW_TASKS = "http://13.53.188.15:8080/api/v1/tasks/new_task";
const GET_ONGOING_TASKS = "http://13.53.188.15:8080/api/v1/tasks/user/ongoing_task";
const GET_COMPLETED_TASKS = "http://13.53.188.15:8080/api/v1/tasks/user/completed_task";
const GET_PENDING_APPROVAL_TASKS = "http://13.53.188.15:8080/api/v1/tasks/user/pending_approval_task";
const CANCEL_TASK = "http://13.53.188.15:8080/api/v1/tasks/cancel_task";


class DoerService {
    getAllNewTasks(data, token) {
        return axios.get(GET_ALL_NEW_TASKS, {
            headers: {
                Authorization: `Bearer ${token}`,// Add the Bearer token to the headers
                "Content-Type": "application/json"
            }
        });
    }

    getAllOngoingTasksCreated(data, token) {
        return axios.get(GET_ONGOING_TASKS, {
            headers: {
                Authorization: `Bearer ${token}`,// Add the Bearer token to the headers
                "Content-Type": "application/json"
            }
        });
    }

    getAllCompletedTasksCreated(data, token) {
        return axios.get(GET_COMPLETED_TASKS, {
            headers: {
                Authorization: `Bearer ${token}`,// Add the Bearer token to the headers
                "Content-Type": "application/json"
            }
        });
    }

    getAllOngoingTasks(data, token) {
        return axios.get(GET_PENDING_APPROVAL_TASKS, {
            headers: {
                Authorization: `Bearer ${token}`,// Add the Bearer token to the headers
                "Content-Type": "application/json"
            }
        });

    }

    acceptTask(token, taskId) {
        return axios.post(`http://13.53.188.15:8080/api/v1/tasks/${taskId}/accept`, "", {
            headers: {
                Authorization: `Bearer ${token}`,// Add the Bearer token to the headers
            }
        });
    }

    markTaskForApproval(token, taskId) {
        return axios.post(`http://13.53.188.15:8080/api/v1/tasks/${taskId}/complete`, "", {
            headers: {
                Authorization: `Bearer ${token}`,// Add the Bearer token to the headers
            }
        });
    }


}

export default new DoerService();