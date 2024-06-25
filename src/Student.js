import React, { useState } from 'react'

export default function Student() {
    
    // const [student,setStudent] = useState({
    //     name:"Mehemmed",
    //     surname:"Hemzeyev",
    //     birthdate:"2024-01-16",
    //     score:12,
    //     image:"https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-what-you-need-know-before-rebranding-11.png"
    // });

    const [student,setStudent] = useState({
        name:"",
        surname:"",
        birthdate:"",
        score:"",
        image:""
    });


    const[check1,setCheck1] = useState(false);
    const[check2,setCheck2] = useState(false);
    const[check3,setCheck3] = useState(false);
    const[check4,setCheck4] = useState(false);
    const[check5,setCheck5] = useState(false);
    const[color,setColor] = useState("black");


    const [text,setText] = useState("");

    function Submit(e)
    {
        e.preventDefault();
        if(check1 && check2 && check3 && check4 && check5)
        {
            setText("Everything has changed"); 
            setColor("green");
        }
        else
        {
            setText("any data is left blank");
            setColor("red");

        }
    }

    function ChangeName(e)
    {
        setStudent({
            ...student,
            name:e.target.value
        });

        setCheck1(true);
    }

    function ChangeSurname(e)
    {
        setStudent({
            ...student,
            surname:e.target.value
        });

        setCheck2(true);
    }

    function ChangeBirthday(e)
    {
        setStudent({
            ...student,
            birthdate:e.target.value
        });

        setCheck3(true);
    }

    function ChangeScore(e)
    {
        setStudent({
            ...student,
            score:e.target.value
        });

        setCheck4(true);

        
    }

    function ChangeImage(e)
    {
        setStudent({
            ...student,
            image:e.target.value
        });

        setCheck5(true);
        
    }

  return (
    <section style={{display:"flex",justifyContent:"center",padding:"5%"}}>
        
        <form onSubmit={Submit} style={{width:"30%",backgroundColor:"white"}}>
            
            <section style={{padding:"20px",border:"3px solid black",borderRadius:"10px"}}>
                <input style={{display:"block",fontSize:"1.5em",padding:"10px",borderRadius:"5px",width:"95%"}} placeholder='Name:' onChange={(e) => ChangeName(e)}></input>
                <input style={{display:"block",marginTop:"20px",fontSize:"1.5em",padding:"10px",borderRadius:"5px",width:"95%"}} placeholder='Surname:' onChange={(e) => ChangeSurname(e)}></input>
                <input style={{display:"block",marginTop:"20px",fontSize:"1.5em",padding:"10px",borderRadius:"5px",width:"95%"}} type='date' onChange={(e) => ChangeBirthday(e)}></input>
                <input style={{display:"block",marginTop:"20px",fontSize:"1.5em",padding:"10px",borderRadius:"5px",width:"95%"}} placeholder='Score' onChange={(e) => ChangeScore(e)}></input>
                <input style={{display:"block",marginTop:"20px",fontSize:"1.5em",padding:"10px",borderRadius:"5px",width:"95%"}} placeholder='URL' onChange={(e) => ChangeImage(e)}></input>

                <button type='submit' 
                    style={{backgroundColor:"green",textAlign:"center",padding:"10px",fontSize:"1.5em",color:"white",borderRadius:"5px",border:"3px solid black",marginTop:"30px",width:"40%"}}>
                    Submit
                </button>

            </section>

        </form>
        <section style={{padding:"0px 20px 20px 20px",border:"3px solid black",borderRadius:"10px",marginLeft:"50px",width:"20%",backgroundColor:"white"}}>
            <h1 style={{fontSize:"1em",padding:"10px",borderRadius:"5px",width:"90%",border:"3px solid black"}}>{student.name}</h1>
            <h1 style={{fontSize:"1em",padding:"10px",borderRadius:"5px",width:"90%",border:"3px solid black"}}>{student.surname}</h1>
            <h1 style={{fontSize:"1em",padding:"10px",borderRadius:"5px",width:"90%",border:"3px solid black"}}>{student.birthdate}</h1>
            <h1 style={{fontSize:"1em",padding:"10px",borderRadius:"5px",width:"90%",border:"3px solid black"}}>{student.score}</h1>
            <img style={{width:"100px",height:"100px",marginLeft:"30%"}} src={student.image}></img>
            <h1 style={{fontSize:"1em",padding:"10px",borderRadius:"5px",width:"90%",border:`3px solid ${color}`}}>{text}</h1>

        </section>
    </section>
  )
}
