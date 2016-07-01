import redis from 'redis';
const db = redis.createClient();


// db.set(email, JSON.stringify(val), (error2, result2) => {
//   if (error2) {
//     console.log('error2: cannot set new user to name key', error2);
//   } else {
//     console.log('successfully added new user! result2 is:', result2);
//   }
// });

db.get();
db.set();

export default db;
