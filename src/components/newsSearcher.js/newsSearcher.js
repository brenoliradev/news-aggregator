import { Button, TextField, MenuItem } from '@mui/material';
import { useFormik } from "formik";
import * as Yup from 'yup'

const SimpleSchema = Yup.object().shape({
    subject: Yup.string()
    .required("Required*"),
})


const handleChange = (event) => {
    setLang(event.target.value);
};

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

const NewsSearcher = () => {
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
        </div>
    )
}

export deafult NewsSearcher;