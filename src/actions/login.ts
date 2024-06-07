'use server';
import { agent } from "@/api/agent.api";

export const handleSubmit = async (formData: FormData):Promise<boolean> => {
    const userToSend = {
        email: formData.get('email'),
        password: formData.get('password')
    };
    
    const response = await agent.post('/Users/Login', userToSend)
    .then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
    });
    if(response){
        localStorage.setItem('user', JSON.stringify(response));
        return true;
    }
    return false;
};