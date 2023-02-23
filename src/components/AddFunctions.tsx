import React, { useState } from 'react';

const AddFunctions = () => {
    const [subject, setSubject] = useState({
        subjects: "",
        name: "",
        type: "",
        syntex: "",
        desc: ""
    })

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target
        setSubject({
            ...subject,
            [name]: name === "subjects" ? Number(value): value
        })
    }
    const submit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(subject)
        fetch('http://localhost:3003/functions',{
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(subject)
        }).then(res=>{
            if(res.ok){
                alert("등록되었습니다")
            }
        })
        .catch(e=>console.log(e))
    }
    return (
        <div>
            <form onSubmit={submit}>
                <p><input type="text" name="subjects" placeholder='과목을입력하세요(숫자)'
                value={subject.subjects} onChange={onChange}/></p>
                <p><input type="text" name="name" placeholder='함수입력'
                value={subject.name} onChange={onChange}/></p>
                <p><input type="text" name="type" placeholder='타입입력'
                value={subject.type} onChange={onChange}/></p>
                <p><input type="text" name="syntex" placeholder='구문입력'
                value={subject.syntex} onChange={onChange}/></p>
                <p><input type="text" name="desc" placeholder='설명입력'
                value={subject.desc} onChange={onChange}/></p>
                <p><button type='submit'>추가</button></p>
            </form>
        </div>
    );
};

export default AddFunctions;