import React from "react";
import newsCatcher from "../newscatcherAPI/newscatcher";

import { Button, TextField, MenuItem } from '@mui/material';
import { useFormik } from "formik";
import * as Yup from 'yup'

const SimpleSchema = Yup.object().shape({
    subject: Yup.string()
    .required("Required*"),
})

const FeedPage = () => {
    const [lang, setLang] = React.useState('en');

    const handleChange = (event) => {
        setLang(event.target.value);
    };

    const formik = useFormik({
        initialValues: {
            subject: '',
        },
        validationSchema: SimpleSchema,
        onSubmit: values => {
            // newsCatcher(values.subject, lang)
        },
    })
    
    return (
        <div className="main-wrap">
            <header>
                <h1>Hello</h1>
            </header>
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
                            label="Search by subject, author, personalitie..."
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
        </div>
    )
}

export default FeedPage;