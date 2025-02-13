function phoneNumberToStars(phoneNumber) {
    const phoneNumberArray = phoneNumber.split('');
    phoneNumberArray.splice(3, 4, '****');
    return phoneNumberArray.join('');

}