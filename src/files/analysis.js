// 1. 篩選出所有戰士 (filter)
function getWarriors(data) {
    return data.filter(person => person.role === "Warrior");
}

// 2. 產生名牌字串陣列 (map)
function getNameTags(data) {
    return data.map(person => `[${person.role}] ${person.name}`);
}

// 3. 找出甘道夫 (find)
function findGandalf(data) {
    return data.find(person => person.name === "Gandalf");
}

// 4. 計算總金額 (reduce)
function calculateTotalMoney(data) {
    return data.reduce((total, person) => total + person.money, 0);
}

// 5. 檢查狀態 (every & some)
function checkStatus(data) {
    return {
        isEveryoneReady: data.every(person => person.isReady),
        hasSuperStrong: data.some(person => person.level > 100)
    };
}

// 6. 統計職業人數 (forEach)
function tallyRoles(data) {
    const count = {};
    data.forEach(person => {
        if (count[person.role]) {
            count[person.role]++;
        } else {
            count[person.role] = 1;
        }
    });
    return count;
}