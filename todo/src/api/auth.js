import { Auth } from 'aws-amplify';

export const getSuccessfulResponse = (response) => ({
    isSuccess: true,
    data: response,
    error: null
});

export const getErrorResponse = (error) => ({
    isSuccess: false,
    data: null,
    error: error
});

export async function signIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
        return getSuccessfulResponse(user);
    } catch (error) {
        console.log('error signing in', error);
        return getErrorResponse(error);
    }
}



export async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}