import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/modal.scss';
import Loading from './Loading';

export default function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2>유저 정보</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.userData ? <ul>
                    <li><h3>{props.userData.user_id}</h3></li>
                    <li><h3>{props.userData.user_name}</h3></li>
                    <li><h3>{props.userData.user_type == 'W' ? 'WANTER' : 'HELPER'}</h3></li>
                    <li><h3>{props.userData.user_like}</h3></li>
                </ul> : <Loading />}

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}