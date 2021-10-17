import React, { useState } from "react";
import NewsCatcher from "../newsCatcherAPI/newsCatcher";
import NewsAggregator from '../newsAggregator/newsAggregator'

import { Button, TextField, MenuItem } from '@mui/material';
import { useFormik } from "formik";
import * as Yup from 'yup'

const SimpleSchema = Yup.object().shape({
    subject: Yup.string()
    .required("Required*"),
})

const FeedPage = () => {
    const [lang, setLang] = React.useState('en');
    const [news, setNews] = useState([]);
    const [firstLoad, setLoadCount] = useState(0);
    const [indexVariable, setIndex] = useState(0);

    const callApi = (values, lang) => {
        NewsCatcher(values, lang)
        .then(response => { 
            const titleResponse = [];
            const linksResponse = [];
            const completeResponse = [];

            // Catches the keys and turn it on a multidimensional-array
            for (let i = 0; i < response.articles.length; i++) {
                titleResponse.push(response.articles[i].title);
                linksResponse.push(response.articles[i].link);
            }

            completeResponse.push(titleResponse);
            completeResponse.push(linksResponse);

            setNews(completeResponse);
            setIndex(0);   
        }) 
    }

    if (firstLoad === 0) {
        window.onload = callApi("technology", lang);
        setLoadCount(1);
    }
    
    const formik = useFormik({
        initialValues: {
            subject: '',
        },
        validationSchema: SimpleSchema,
        onSubmit: values => {
            callApi(values.subject, lang);
            values.subject = "";
        }
    })
    
    const handleChange = (event) => {
        setLang(event.target.value);
    };

    const addIndex = () => {
        setIndex(indexVariable + 10);
    }

    const subtractIndex = () => {
        setIndex(indexVariable - 10);
    }

    return (
        <div className="main-wrap">
            <p className="feed-text">NEWS</p>
            <div className="feed-wrap">
                <form 
                className="feed-form"
                onSubmit={formik.handleSubmit}
                >
                    <div className="form-textfield">
                        <TextField 
                            name="subject"
                            variant='outlined'
                            label="Search by subject, theme, personalitie..."
                            type="text"
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                            error={Boolean(formik.errors.subject)}    
                            helperText={formik.errors.subject}
                            autoComplete="off"
                            fullWidth
                            style={{ height: "100%"}}
                        />
                    </div>
                    <div className="form-responsive">
                        <div className="form-select">
                            <TextField
                                label="Language"
                                variant='outlined'
                                defaultValue="en"
                                onChange={handleChange}
                                fullWidth
                                select
                                style={{ height: "100%"}}
                            >
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="pt">Português</MenuItem>
                                <MenuItem value="es">Español</MenuItem>
                                <MenuItem value="fr">Français</MenuItem>
                            </TextField>
                        </div>
                        <div className="form-button">
                            <Button 
                                variant="contained"
                                type="submit"
                                fullWidth
                                style={{ height: "100%",
                                outline: "none"
                                }}
                            >
                                Search!
                            </Button> 
                        </div>
                    </div>
                </form>
            </div>
            <NewsAggregator
                news={news}
                indexVariable={indexVariable}
                addIndex={addIndex}
                subtractIndex={subtractIndex}
            />
        </div>
    )
}

export default FeedPage;