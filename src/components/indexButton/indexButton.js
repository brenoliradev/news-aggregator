import './indexButton.scss';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const IndexButton = ({ indexVariable, addIndex, subtractIndex }) => {
    if (indexVariable/10+1 === 1) {
        return (
            <div className="panel-div">
                <ArrowLeftIcon 
                    fontSize="large"
                    style={{color: 'transparent'}}
                />
                <p className='panel-text'>{indexVariable/10 + 1}</p>
                <ArrowRightIcon 
                    onClick={addIndex}
                    fontSize="large"
                />
            </div>
        )
    } else if (indexVariable/10+1 > 1 && indexVariable/10+1 < 5) {
        return (
            <div className="panel-div">
                <ArrowLeftIcon 
                    onClick={subtractIndex}
                    fontSize="large"
                />
                <p className='panel-text'>{indexVariable/10 + 1}</p>
                <ArrowRightIcon 
                    onClick={addIndex}
                    fontSize="large"
                />
            </div>
        )
    } else if (indexVariable/10+1 === 5) {
        return (
            <div className="panel-div">
                <ArrowLeftIcon 
                    onClick={subtractIndex}
                    fontSize="large"
                />
                <p className='panel-text'>{indexVariable/10 + 1}</p>
                <ArrowRightIcon 
                    fontSize="large"
                    style={{color: 'transparent'}}
                />
            </div>
        )
    }
}

export default IndexButton;