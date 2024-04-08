export const LoginForm = () => {
  return (
    <form>
      <fieldset>
        <label htmlFor="id">아이디</label>
        <input id="id" data-testid="id" type="text" name="id" placeholder="아이디를 입력하세요" />
      </fieldset>

      <fieldset>
        <label htmlFor="password">비밀번호</label>
        <input id="passward" data-testid="password" type="password" name="password" placeholder="비밀번호를 입력하세요" />
      </fieldset>
      <button role="button" onClick={() => console.log('submit')}>
        test
      </button>
    </form>
  )
}
