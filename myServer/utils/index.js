/**
 * 객체의 name이 snake case인 key를 camel case로 변경하는 함수
 * @param {Object} obj 객체 또는 배열
 * @returns key name이 camel case인 객체 반환
 */
const snakeToCamel = (obj) => {
  if (!obj || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map((item) => snakeToCamel(item));
  }

  const camelObj = {};

  for (const [key, value] of Object.entries(obj)) {
    const camelKey = key.replace(/_([a-z])/g, (match, letter) =>
      letter.toUpperCase()
    );
    camelObj[camelKey] = snakeToCamel(value);
  }

  return camelObj;
};

module.exports = { snakeToCamel };
