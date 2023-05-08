
const Validator =
    {
        isValidEmail(email: string): boolean {
            const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            return emailRegex.test(email);
        },
        isValidPassword( password : string ) {
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;;
            return passwordRegex.test(password);
        },
        isValidURL(url: string): boolean {
            const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,7}(?:\/\S*)?$/;
            return urlRegex.test(url);
        },
        isValidBirth( birth : string ) {
            const dateRegex = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
            return dateRegex.test(birth)
        }
    }

export default Validator;