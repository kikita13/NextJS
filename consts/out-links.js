export const GIT_HUB = 'https://github.com/kikita13'
export const HH_RU = 'https://bratsk.hh.ru/resume/eec67adeff0b1486bc0039ed1f365750645776'
export const USERS_API = 'https://jsonplaceholder.typicode.com/users'



export const getStaticProps = async (context) => {
  const getData = await fetch(USERS_API);
  const data = await getData.json();
  return {
    props: {users: data}
  }
}
