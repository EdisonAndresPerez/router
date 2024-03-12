import { Link } from 'react-router-dom';


const Item = (props) => {
    const title = props.title;
    const id = props.id;    
    const url = props.to;

    return (
        <div>
            <div>
                <Link to={url}>{title}</Link>
            </div>
        </div>
    );
};

export default Item;