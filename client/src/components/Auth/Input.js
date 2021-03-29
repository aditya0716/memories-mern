import React from 'react';
import {Grid, IconButton, InputAdornment, TextField} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function Input({name, handleChange, label, half, autoFocus, type, handleShowPassword}) {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position= "end">
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                        </InputAdornment>
                    ),
                } : null}
            />
        </Grid>
    );
}

export default Input;