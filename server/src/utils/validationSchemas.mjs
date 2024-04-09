export const createValidationSchema = {
    username: {
        isLength: {
            options: {
                min: 3,
                max: 32
            },
            errorMessage: "Mentor username must be at least 3 characters with a max of 32 characters",
        },
        notEmpty: false,
        isString: {
            errorMessage: "Mentor username must be a string"
        }
    },
    displayName: {
        isLength: {
            options: {
                min: 3,
                max: 32
            },
            errorMessage: "Mentor username must be at least 3 characters with a max of 32 characters",
        },
        notEmpty: false,
        isString: {
            errorMessage: "Mentor username must be a string"
        }
    },
    phoneNumber:{
        notEmpty: false,
        isString: false
    },
    password: {
        notEmpty:{
            errorMessage: 'Password cannot be empty'
        },
        isString: {
            errorMessage: 'Password must be a string'
        }
    }
    
};
export const updateValidationSchema = {
    username: {
        isLength: {
            options: {
                min: 3,
                max: 32
            },
            errorMessage: "Mentor username must be at least 3 characters with a max of 32 characters",
        },
        notEmpty: false,
        isString: {
            errorMessage: "Mentor username must be a string"
        }
    },
    displayName: {
        isLength: {
            options: {
                min: 3,
                max: 32
            },
            errorMessage: "Mentor username must be at least 3 characters with a max of 32 characters",
        },
        notEmpty: false,
        isString: {
            errorMessage: "Mentor username must be a string"
        }
    },
    phoneNumber:{
        notEmpty: false,
        isString: false
    }
};
export const loginValidationSchema = {
    username: {
        isLength: {
            options: {
                min: 3,
                max: 32
            },
            errorMessage: "Mentor username must be at least 3 characters with a max of 32 characters",
        },
        notEmpty: {
            errorMessage: "Mentor username  cannot be empty"
        },
        isString: {
            errorMessage: "Mentor username must be a string"
        },
    },
    password: {
        notEmpty:true,
    }
}
