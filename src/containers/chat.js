import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import robot from '../images/robot.svg';
import next from '../images/next.svg';
import { RegionDropdown } from 'react-country-region-selector';



const Form = (propis) => (

    <Formik
        initialValues={{ name: "", country: "Brazil", state: "", city: "", birthday: "", email: "", rate: 0 }}
        propriedades={propis}
        onSubmit={(props) => {
            axios.post('https://606b5dd3f8678400172e6292.mockapi.io/api/data/users', { props })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    alert("Dados enviados! Obrigado!");
                })
        }
        }


        validationSchema={Yup.object().shape({
            name: Yup.string().min(2, 'Nome inválido.').required("Preencher nome."),
            state: Yup.string().required("Selecionar estado."),
            city: Yup.string().required("Preencher cidade"),
            birthday: Yup.string().required("Preencher data de nascimento."),
            email: Yup.string().email("E-mail inválido.").required("Preencher e-mail.")
        })}

    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleSubmit,
                handleChange,
                handleBlur
            } = props;

            return (
                <form onSubmit={handleSubmit}>
                    <div className="chatSide">
                        <h1>Fale Conosco</h1>
                    </div>
                    <div className="chat">
                        <div className="name">

                            <p>Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso saber seu nome. </p>
                            <img src={robot} alt={"robo"} />
                            <div className="bubble">
                                <Field
                                    name="name"
                                    placeholder="Nome e Sobrenome"
                                    type="text"
                                    className={
                                        errors.name && touched.name
                                            ? "text-input error"
                                            : "text-input"
                                    }
                                />
                                {errors.name && touched.name && (
                                    <div className="input-feedback">{errors.name}</div>
                                )}
                                <button type="button" disabled={isSubmitting} onClick={(e)=>{
                                    if(values.name !== "") {
                                        propis.setMsg('msg2',true);
                                    } else {
                                        alert("Por Favor, preencher dados.");
                                    }
                                }}>
                                    <img src={next} alt={"seta"} />
                                </button>
                            </div>
                        </div>

                        <div className={propis.msgs[0]['msg2']?"state":"state hidden" && "city hidden"}>

                            <p>Que satisfação, <strong>{values.name}</strong>. Agora que sei seu nome, qual a cidade e estado que você mora? </p>
                            <img src={robot} alt={"robo"} />
                            <div className="bubble">
                                <RegionDropdown className="region" name="state" country={values.country} value={values.state}
                                    onChange={(_, e) => handleChange(e)} onBlur={handleBlur} showDefaultOption={false} />
                                {errors.state && touched.state && (
                                    <div className="input-feedback">{errors.state}</div>
                                )}
                                <Field
                                    name="city"
                                    placeholder="Cidade"
                                    type="text"
                                    className={
                                        errors.city && touched.city
                                            ? "text-input error"
                                            : "text-input"
                                    }
                                />
                                {errors.city && touched.city && (
                                    <div className="input-feedback">{errors.city}</div>
                                )}
                                <button type="button" disabled={isSubmitting} onClick={(e)=>{
                                    if(values.city !== "") {
                                        propis.setMsg('msg3',true);
                                    } else {
                                        alert("Por Favor, preencher dados.");
                                    }
                                    }}>
                                    <img src={next} alt={"seta"} />
                                </button>
                            </div>
                        </div>

                        <div className={propis.msgs[0]['msg3']?"birthday":"birthday hidden"}>

                            <p>Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu? </p>
                            <img src={robot} alt={"robo"} />
                            <div className="bubble">
                                <Field
                                    name="birthday"
                                    type="date"
                                    className={
                                        errors.birthday && touched.birthday
                                            ? "text-input error"
                                            : "text-input"
                                    }
                                />
                                {errors.birthday && touched.birthday && (
                                    <div className="input-feedback">{errors.birthday}</div>
                                )}
                                <button type="button" disabled={isSubmitting} onClick={(e)=>{
                                     if(values.birthday !== "") {
                                        propis.setMsg('msg4',true);
                                    } else {
                                        alert("Por Favor, preencher dados.");
                                    }
                                    }}>
                                    <img src={next} alt={"seta"} />
                                </button>
                            </div>
                        </div>

                        <div className={propis.msgs[0]['msg4']?"email":"email hidden"}>
                            <p>Agora me fala teu e-mail, por gentileza. </p>
                            <img src={robot} alt={"robo"} />
                            <div className="bubble">
                                <Field
                                    name="email"
                                    placeholder="E-mail"
                                    type="text"
                                    className={
                                        errors.email && touched.email
                                            ? "text-input error"
                                            : "text-input"
                                    }
                                />
                                {errors.email && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                )}
                                <button type="button" disabled={isSubmitting} onClick={(e)=>{
                                     if(values.email !== "") {
                                        propis.setMsg('msg5',true);
                                    } else {
                                        alert("Por Favor, preencher dados.");
                                    }
                                    }}>
                                    <img src={next} alt={"seta"} />
                                </button>
                            </div>
                        </div>

                        <div className={propis.msgs[0]['msg5']?"visible":"hidden"}>
                        <p>Você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos! </p>
                        <img src={robot} alt={"robo"} />
                        <div className="bubble rate">
                                <input type="radio" id="star5" name="rate" onClick={(e)=>{values.rate = 5}} />
                                <label htmlFor="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" onClick={(e)=>{values.rate = 4}} />
                                <label htmlFor="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" onClick={(e)=>{values.rate = 3}} />
                                <label htmlFor="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" onClick={(e)=>{values.rate = 2}} />
                                <label htmlFor="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" onClick={(e)=>{values.rate = 1}} />
                                <label htmlFor="star1" title="text">1 star</label>
                        </div>
                        
                        <button className="salvar" type="submit" disabled={isSubmitting} onSubmit={handleSubmit}>
                            Salvar
            </button>
            </div>
                    </div>
                </form>

            );
        }}

    </Formik>

)



export default Form;