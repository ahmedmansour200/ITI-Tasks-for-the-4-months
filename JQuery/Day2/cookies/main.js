const cookieLib = {
    getCookie: function (cookieName) {
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },

    setCookie: function (cookieName, cookieValue, expiryDate) {
        let d = new Date(expiryDate);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    },

    deleteCookie: function (cookieName) {
        document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    },

    allCookieList: function () {
        let cookies = document.cookie.split(";").map(cookie => {
            let [name, value] = cookie.split("=");
            return [name.trim(), value];
        });
        return cookies;
    },

    hasCookie: function (cookieName) {
        return this.getCookie(cookieName) !== "";
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const registration = document.getElementById('registration');
    const profile = document.getElementById('profile');

    if (cookieLib.hasCookie('username')) {
        showProfile();
    } else {
        registration.style.display = 'block';
    }

    document.getElementById('registrationForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const gender = document.getElementById('gender').value;
        const fontColor = document.getElementById('fontColor').value;

        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1); // 1 year expiry

        cookieLib.setCookie('username', username, expiryDate);
        cookieLib.setCookie('gender', gender, expiryDate);
        cookieLib.setCookie('fontColor', fontColor, expiryDate);
        cookieLib.setCookie('visitCount', 0, expiryDate);

        showProfile();
    });

    function showProfile() {
        registration.style.display = 'none';
        profile.style.display = 'block';

        const username = cookieLib.getCookie('username');
        const gender = cookieLib.getCookie('gender');
        const fontColor = cookieLib.getCookie('fontColor');
        let visitCount = parseInt(cookieLib.getCookie('visitCount'));

        visitCount += 1;
        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        cookieLib.setCookie('visitCount', visitCount, expiryDate);

        document.getElementById('greeting').textContent = `Welcome, ${username}`;
        document.getElementById('greeting').style.color = fontColor;

        const profilePic = gender === 'male' ? 'male.jpg' : 'female.jpg';
        document.getElementById('profilePic').src = profilePic;

        document.getElementById('visitCount').textContent = `Number of visits: ${visitCount}`;
    }
});