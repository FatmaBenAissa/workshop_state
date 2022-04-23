import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import Profile from './components/Profile';


function App() {
 const [name, setName] = useState("fatma");
 const [show, setShow] = useState(false)
 const [age, setAge] = useState(0);
 const [person, setPerson] = useState({
   name:"fedi",
   age:"20",
 })
 const [people, setPeople] = useState([
 {name:"fedi",age:20,url:"data:image/jpeg;base64,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"},
 {name:"alaa",age:28,url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAACACAMAAAAGcAYZAAABLFBMVEX////ppSYYHB2tfykREiTqvJgkJiUAAAChoaGHcl+4iHHspybuv5ronwDywpz+/vwKCyDpoxwAABsdIiXHoYMTGx6zgymOdWH9+fLyqyarfCG3h2zxzpf35MfSlifhtpR8aFZ1aV+ji3YAABQAChzMzc378uT57dr13bnvwn7st1/hoCYAEiMQHCX46dDIjyWVbyZwVieMaSfz16zpt4KTgW+odgjClHoABhAAEhxjSiC3uLgKEBFfX2U9PUdsbHVMTFYuLjntvm/qr0rpqzpcSCVBNyQvLSV5WiJOPiI9ODJRRz5iU0ZzW01jXFUEMjwvPUFCRkbDmWrLroHWqHfSvZzBk1SyiDzl1r+bfl6ohlrWoFKgekCzk3jVmz+mf26HZT6HhX/h4eKAgYk5DZ24AAAI90lEQVRoge2aeV/iyBaGgQghJARIghgHicStcRcbFQUBcV9Q58617/TtjNPm+3+HeyohIaQqC9v0/cO3WwjLj8f3nDpVpwojkU996lO/QJn1jaXDYrFycVGpFA+/7G4szB65sFu86EZzaVAOybi43KwczhCe2ShuAijHRt1C/MvK0kzQ68UuMDGkA55OXyxNm7q0CXH1gdro4vr0oJkvXV+nwyGvbEwJS6Cysiyz9h1GnobnjU03lZWjJer29Oru7ur0ltrbYt3oXK6YmZCaKeLUrer19vaOaChfz94c7GGm093dibC7l2nXJ8pbt8KOmHBKzN7tyW7L6coElotptxF5XtxJYBK3q1iw09Fxx9fCpttsVN53ebW0c7qFZTl9OBZ2o4vVjkzViVQEvipFMcvFMbC7UQzLlra9sAA+mMcsj5HkJcI0zF6Tg2xqe5/ac2c5vTkieAlLLUquj10YXNcURZVc4Fx3Ymx0y9cuRLo6T1F7riznuiM43iXNxjJFtCvGYrH+1RVwMcvpi9DgdWxkGtm9Muzm8zFT8Ojm5v7+4fHpsQ9OUIZc4ytdCYldwAsIYUs3hrsnTbKlKPE4x/O8JA4CjVsOW8f4dGFw5yHM4r3CcwPF++KlvCPQmOV0qHagSMRG5SpMkDHFZg2JV40J5ZqyNTS+ciE6oA0yNirfiYm8xhOxoAcU6hvKIUewc5uB2MylR2fBQnpFTyxnGBb3nWBHsNNfxowyVC8M5WVvrnLiHFiWZTvYuYAWZN2rj2JLvtx4/B5xb4e5A8u5gGK68OTuib5cfhmKWDxwcSl7yk77NiDE+bHP3fHlGgkmcCnKtOw/X256tquBXAkSLJ4SuKjzCxha3nYDuXHFk2uWlJ9h4gTp4D75cOOiR5yN8QUD23vW2vW2C+NZRFw0G4PsORIu+s/w94Tx7LTsvRRX/DYjW4m6+CipTBnEqKqkGDO0pKo1xnhG64n1etULi8ZX2qPBzPjYBcMPSu/5ucfUVFCt3Ht+6fVen1/KNfREjYHXnrX7fR8utedRw4e+XPl3Xnl55YwYo9temYtrz4r1mFe3JV7z5VJHZK53ESGlv8a5h5q9HHFqmeO0V3ugcdILH1cW/bn/IWEXfO0aXMbJZXhOGnDjSg+ufbHU4r9I3C/BXLVnc/iyxsWV54FfrRbIpShSCXtOzaZywFVe4lb9xJ/hiutJVgB4dBkQZ+qIMKIXLknNnIO7CbFUy4pZrkq5zBtJVcz6jWuvAP8jiPtvnOvVZ9jqAldRe2WmBhXbq5kutV6vbDxmNOjx3gK4i7+PnF4QhFTjOcVoJLl+YjneeCzBbwDcb0H5/YY3Wr6TVT/QnMoZU+Nwc2c+VuNcUJgh0Hjb4V+9BvhrvEZuJ5GYEFhCBS9cBmFRiv9UvLDKclByDS42sNZDYKPyd7tuOLRXUOx2mpOYEFjCzLER5mBMflOt+pUKqePj1LtmPVb/9FwCnVxsQPu0GgOxb0w/0BrDMO+pArOs9cNcCMd9G72MEPe/yyjQnFJgLC2raArjpOXvoeKMFZL/Imhx/2IKsDGTmCFJUEgq8yMEllDAnvuEYTFMQashmKqh/aimqXBdkyDsM+XKPyyP/e0o7H3NJwph0gtyTxzhuOxWn6sq/S2woppP/JgpNyp/s7IKcYZ/fSpTCEfFuaHGFXL8nSEprN3xxnPUGNIEhbaLcUPNGwb3ncD9LSR28c3d6fjtFYa5KRz8Hp7rwkY2/LucAbeUShVc2EIqNBdbF9bDrIOmXwycCs09wrgZn73gkLrKcWoo1IXUCFy8cw9oY22/XVgWgPRe6Os9NQoX73NCThzAhQVISg0rLJfC+7qQhYTaaEQ+HgYHdpKG8DLyOUFycb9afc7xGFzCBikT3FAibHfQvkojB5q4IQxKMIu+DRxgXWn+7dv8fOAcfUQ6H/XbqAAyWtpbrP7h6p+dwf77oArbbj84aZuCTkQ9odHS4u1doi6sYAdJjjTf1+v5xPVpFdhedgnbMhRoYoJZtlS9WxXq5vk+1q9zVprfT+DlfL6+mr8+8HBNDDOMaNJ3N/LinbBqfaUQO9FIGxXD8qP9JmDf7RPA+KLQF370LM/fCPbnoY+8Ie1RUDW/N2LO961e42Ty8UYEX/vZ6Omqk4oMM8QjO065d70xX3efGS5SHthIZtgvu3W9GnOrUYjjoeaUxzr2zvrVMNhjVBkja9jwFY4Fxw+KyzLHaTcnhHeuuk4rvY/cF4ZyWxUIHwaOTxjYMwyovPJE54nvXHUe++NLL9kwWyK5NS3TT1r/fIVX1Acaj7Gp/ND3K37f5Th23/Kp18cZnk8Sj8vLTw/iyUnD+231wfmsT3aR7G0hWyLHbmAG2H7MYcP4RtAla1WSq55hHkF1K8OetWvJWh3Y6wC/4bj9WiKvCEMyhxZb8slueOVvTO5RiO+AjcaSXZxGmAG8HyrKSAvoDxnkg6n4NUe0b+kOtIS4iWmk10wwqZsjCq0P0wkzSnBgCQ1USZfIc+QY4HlCr+6pi6Mp+Y3VSWfd3vpOT4lLhxnKDpWnA6bPRsNGIj+nAG40RsZGIsmJwY3Y2ujYSGSNDlhuAkQnPsbBRiIfiUks063xqEj62JYbo48op87GtEz3xoyxpY+fY1imY8nJqAb5fERyg25NaLavs1HINN2cDhVprUmHynODpvXpUZE+9ESQaYC+JqdLRcqctRK0JxtB9bVJ/wzYQx9rP18hgXTDSW8AspF4Tc4KarPP9DYYt9Q4bybPZsx0KPNhKPOPAT/1qf9nJX+NIvSvUWRuWNls1ryfy87NUsDNdrIIBzdCVjg/72RXBGGls3I+c2673WzCj37ePG8lW8lmst2E+3ZnAsdZQUBWjFvBvBDAzQq6EbImd67TbLVazZNmS9TF5pmuvyZ1+qO9MoGbrOHkvN3W4bbVgYsmPNPS9Zbe1PW2YHKF1nnLeKHZ7OhJeA1eSuqT5Rc5gQjqzVYTPrult1vnTfSUAepz4ffb6cxBPiGynTlhrgP/J4IiL1n4cMEYN1kUdnTXEcwHVpxNZe3b2Y5kU+46+qf0PztSdKrAzbEHAAAAAElFTkSuQmCC"},
 {name:"imen",age:26,url:"data:image/jpeg;base64,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"},])
  return (
    <div className="App" style={{width:"50%", marginLeft:"250px", marginTop:"120px"}}>
    <h1>{name}</h1>
    <button onClick={()=>setName(name+"tutu")}>click here to change name</button>
    <h1>{age}</h1>
    <button onClick={()=>setAge(age+1)}>click here to change age</button><br/><br/>
    <input type="text" onChange={(e)=>setPerson({...person,name:e.target.value})}/>
  <br/><br/>
  <button onClick={()=>setShow(!show)}>click to show</button>
{(show)?<div style={{display:"flex", justifyContent:'space-between'}}>
    {people.map((el)=><Profile p={el}/>)}
</div>:null}
    </div>

  );
}

export default App;
