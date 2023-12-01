// mysql 모듈 가져오기
const mariadb = require("mysql");

// mysql 의 메소드 사용
const conn = mariadb.createConnection({
  // localhost 적는 자리, 마리아디비가 있는 주소를 찾기 위함
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "Tennis",
});
