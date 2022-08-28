import React from 'react';
import style from '../cssModules/bodyMain.module.css'

type SkillsTypes = {
    id: number
    title: string
    picture: string
    description: string
}

const BodyMain = () => {
    const skills: Array<SkillsTypes> = [
        {id: 89, title: 'React', picture: 'somePic1', description: 'some text1'},
        {id: 88, title: 'JavaScript', picture: 'somePic2', description: 'some text2'},
        {id: 56, title: 'Redux', picture: 'somePic3', description: 'some text3'},
        // {id: 4, title: 'HTML', picture: '', description: 'some text'},
        // {id: 5, title: 'CSS', picture: '', description: 'some text'},
        // {id: 5, title: 'CSS', picture: '', description: 'some text'},
    ]
    const mappedSkills = skills.map((el) => {
        return (
            <div key={el.id} className={style.bodySub2part4Container}>
                <div className={style.bodySub2part4Picture}>{el.picture}</div>
                <div className={style.bodySub2part4Title}>{el.title}</div>
                <div className={style.bodySub2part4Description}>{el.description}</div>
            </div>
        )
    })
    return (
        <div className={style.bodyMainStyleWrapper}>

            <div className={style.bodySub1MainStyleContainer}>
                <div className={style.bodySub1}>
                    <div className={style.bodySub1part1}>
                        <div className={style.bodySub1part12}><h1>Welcome!</h1></div>
                        <div className={style.bodySub1part12}>
                            <div>I'm Alex</div>
                            <div>And I'm Frontend DEV</div>
                        </div>
                    </div>
                    <div className={style.bodySub1part2}>
                        Photo
                    </div>
                </div>
            </div>

            <div className={style.bodySub2MainStyleContainer}>
                <div className={style.bodySub2}>
                    <div className={style.bodySub2part1}>
                        Skills
                    </div>
                    <div className={style.bodySub2part3}>
                        <div className={style.bodySub2part2}>
                            {mappedSkills}
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.bodySub3MainStyleContainer}>
                <div className={style.bodySub3}>
                    <div className={style.bodySub3part1}>
                        Projects
                    </div>
                    <div className={style.bodySub3part3}>
                        <div className={style.bodySub3part2}>
                            <div>
                                <div className={style.bodySub3part4}>
                                    somepicturesomepicturesomepicturesome
                                    <label
                                        style={{backgroundColor: 'red', width: '50%', opacity: '0.8'}}
                                        htmlFor='foo'
                                    >
                                        <button
                                            id='foo'
                                            onClick={() => (alert('here is going to Project'))}
                                            style={{display: 'none'}}
                                        />
                                        Watch
                                    </label>
                                </div>
                                <div className={style.bodySub3SubContainer}>
                                    <div className={style.bodySub3part5}>
                                        Name of the project
                                    </div>
                                    <div className={style.bodySub3part6}>
                                        Description
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={style.bodySub3part4}>
                                    somepicturesomepicturesomepicturesome
                                    <label
                                        style={{backgroundColor: 'red', width: '50%', opacity: '0.8'}}
                                        htmlFor='foo1'>
                                        <button
                                            id='foo1'
                                            onClick={() => (alert('here is going to Project'))}
                                            style={{display: 'none'}}
                                        />
                                        Watch
                                    </label>
                                </div>
                                <div className={style.bodySub3SubContainer}>
                                    <div className={style.bodySub3part5}>
                                        Name of the project
                                    </div>
                                    <div className={style.bodySub3part6}>
                                        Description
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.bodySub4MainStyleContainer}>
                <div className={style.bodySub4}>
                    <div className={style.bodySub4part1}>
                        Available for remote work
                    </div>
                    <div className={style.bodySub4part2}>
                        <label
                            style={{backgroundColor: 'red', opacity: '0.8'}}
                            htmlFor='foo3'>
                            <button
                                id='foo3'
                                onClick={() => (alert('Hire me'))}
                                style={{display: 'none'}}
                            />
                            Hire me
                        </label>
                    </div>

                </div>
            </div>

            <div className={style.bodySub5MainStyleContainer}>
                <div className={style.bodySub5}>
                    <label
                        style={{backgroundColor: 'red', opacity: '0.8'}}
                        htmlFor='foo4'>
                        <button
                            id='foo4'
                            onClick={() => (alert('Contacts with me'))}
                            style={{display: 'none'}}
                        />
                        Contacts
                    </label>
                    <div className={style.bodySub5part2}>
                        <form action="">
                            <div className={style.bodySub5part10}>
                                <div className={style.bodySub5part6}>
                                    <input
                                        id="GET-email"
                                        placeholder={'Email'}
                                        type="text"
                                        name="Email"
                                        className={style.bodySub5part9}
                                    />
                                </div>
                                <div className={style.bodySub5part6}>
                                    <input
                                        id="GET-name"
                                        placeholder={'Name'}
                                        type="text"
                                        name="Name"
                                        className={style.bodySub5part9}
                                    />
                                </div>
                            </div>
                            <div className={style.bodySub5part8}>
                                <textarea
                                    placeholder={'...'}
                                    name="userInputArea"
                                    className={style.bodySub5part5}
                                />
                            </div>
                        </form>
                    </div>
                    <label
                        style={{backgroundColor: 'red', opacity: '0.8'}}
                        htmlFor='foo5'>
                        <button
                            id='foo5'
                            onClick={() => (alert('send email to me'))}
                            style={{display: 'none'}}
                        />
                        Send
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BodyMain;