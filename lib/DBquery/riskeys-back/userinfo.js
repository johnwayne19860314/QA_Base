
/**
 * 由于实现的形式未知，可能是本地存储，也可能是缓存处理，也可能是在SSO处理
 * 但是不管怎么样，这一部分逻辑都需要在这里写的
 */

class UserInfo {
    /**
     * 性别
     * 年龄
     * 身高
     * 体重
     * BMI
     * 是否抽烟---抽
     *         --不抽
     *         --戒了
     * 
     * 
     */

    constructor (userId) {
        this.userId = userId;
    }

    setGender (gender) {
        this.gender = gender;
    }

    setHeight (height) {
        this.height = height;
    }
    setWeight (weight) {
        this.weight = weight;
    }

    getBMI () {
        return this.weight / Math.pow(this.height, 2) * 10000;
    }

    setBirth (birthDate) {
        this.birthDate = birthDate;
    }

    getAge () {
        var today = new Date();
        var age = today.getFullYear() - this.birthDate.getFullYear();
        var m = today.getMonth() - this.birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age;
    }

    save () {
        // 真实的存储逻辑
    }
}

UserInfo.getUser = function (userId) {
    return new UserInfo(userId);
};

module.exports = exports = UserInfo;
