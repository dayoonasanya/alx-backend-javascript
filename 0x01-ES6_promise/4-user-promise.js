export default function signUpUser(firstName, lastName) {
    return new Promise.resolve((resolve, reject) => {
      resolve({
        firstName,
        lastName,
      });
      reject(new Error('User already exists'));
    });
  }
