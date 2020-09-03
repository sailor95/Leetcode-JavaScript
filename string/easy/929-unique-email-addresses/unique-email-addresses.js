/**
 * @param {string[]} emails
 * @return {number}
 */
// 84 ms, faster than 50.00%
var numUniqueEmails = emails =>
  new Set(emails.map(email => {
    const [local, domain] = email.split('@');
    return local.split('+')[0].split('.').join('') + '@' + domain;
  })).size;

// 144 ms, faster than 8.22%
var numUniqueEmails_1 = emails => {
  let local,
    domain,
    trimmedEmail,
    trimmedEmails = emails.map(e => {
      [local, domain] = e.split("@");
      trimmedEmail = "";
      for (let word in local) {
        if (local[word] === "+") {
          break;
        } else if (local[word] !== '.') {
          trimmedEmail += local[word];
        }
      }
      return `${trimmedEmail}@${domain}`;
    });
  return new Set(trimmedEmails).size;
}

// 64 ms, faster than 97.12%
const numUniqueEmails_2 = emails => {
  const r = /(\.(?=[^@]+@))|(\+.+(?=@))/g;
  return new Set(emails.map((item) => {
    return item.replace(r, '');
  })).size;
}

// 64 ms, faster than 97.12%
const numUniqueEmails_3 = emails => {
  let s = new Set();
  for (let i = 0; i < emails.length; i++) {
    let [local, domain] = emails[i].split("@");
    local = local.replace(/\.|\+.*/g, '')

    s.add(`${local}@${domain}`);
  }
  return s.size;
}

const tester =
  [
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
  ];

const tester_1 = ["test.email+alex@leetcode.com", "test.email.leet+alex@code.com"];

console.log(numUniqueEmails_1(tester));