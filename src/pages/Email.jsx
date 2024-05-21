import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from "@emailjs/browser"

const SubmitButton = styled.button`
  width: 100px;
  height: 30px;
  color: teal;
  border: 1px solid grey;
  border-radius: 5px;
`;

const Email = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm("service_t59ndr9", "template_f5gwt1v", form.current, "f3F_CPewtzCJZDT-k").then(
      result => {
        alert("이메일이 전송되었습니다.");
        form.current.reset();
      },
      error => {
        console.log(error.text);
        alert("전송에 실패하였습니다.");
      },
    );
  };

  return (
    <section id="email">
      <h1>Contact</h1>
      <p>If you need any further information, please feel free to contact me by email.</p>

      <form ref={form} onSubmit={sendEmail}>
        <div className="row mt-5">
          <label className="col-5">
          <input 
            type="text"
            name="from_name"
            placeholder="보내시는 분"
            maxLength={30}
            required
            className="form-control"
          />
        </label>

        <label className="col-5">
          <input 
            type="text"
            name="from_email"
            placeholder="이메일"
            maxLength={30}
            required
            className="form-control"
          />
        </label>
        </div>
 
        <label className="d-block mt-4 mb-5 col-10">
          본문
          <textarea 
            name="from_message" 
            placeholder="본문 내용을 입력해주세요." 
            required 
            className="form-control textarea mt-2"
          />
        </label>
        <div className="d-grid gap-2 col-10">
          <button type='submit' className="btn btn-secondary">이메일 전송</button>
        </div>
        
      </form>
    </section>
  )

}

export default Email