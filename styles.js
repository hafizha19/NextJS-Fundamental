import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    buttonCustom: {
        width: '100%',
        margin: '10px',
        [theme.breakpoints.down('md')]: {
            background: 'grey',
            color: 'black'
        }
    }

}))  