import { useState } from 'react';
import { Action, ModalType } from '../../const';
import { useAppDispatch } from '../../hooks/hooks';
import './modal.css';
import { addNode, editNode, removeNode, reset } from '../../store/app-data/app-data';

type ModalProps = {
  currentNode: number,
  action: string,
  isOpened: boolean,
  closeModal: () => void,
}
/*
  Render Modal
  When user accept the action, calls dispatch to store
*/
function Modal({currentNode, action, isOpened, closeModal} : ModalProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  let message = 'Please, input value';
  let type = ModalType.Input;

  if(action === Action.Remove || action === Action.Reset){
    message = 'Are you sure?';
    type = ModalType.Accept;
  }

  const handleInput = (evt: React.FormEvent<HTMLInputElement>) => {
    setValue(evt.currentTarget.value);
  }

  const handleAccept = () => {
    switch (action){
      case Action.Add :
        if(value){
          dispatch(addNode({
            parentId: currentNode,
            value: value,
          }));
          closeModal();
          setValue('');
        }
        break;
        case Action.Remove :
          dispatch(removeNode({removeId: currentNode}))
          closeModal();
        break;
      case Action.Edit :
        if(value){
          dispatch(editNode({editId: currentNode, value: value}))
          closeModal();
          setValue('');
        }
        break;
      case Action.Reset :
        dispatch(reset());
        closeModal();
        break;
      default:
        break;
    }
  }

  return (
    isOpened ? (
      <div className="modal-wrapper">
        <div className={`modal-body ${type === ModalType.Accept ? 'accept' : ''}`}>
          <button
            className='close-modal-button'
            onClick={closeModal}
          >
            &times;
          </button>
          <p>{message}</p>
          {
            type === ModalType.Input ? (
              <div className="input">
                <label htmlFor="input-node-value">Value:</label>
                <input
                  type="text"
                  id="input-node-value"
                  placeholder='Node value'
                  value={value}
                  onInput={handleInput}
                />
              </div>
            ) : <></>
          }
          <button
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </div>
    ) : <></>
  );
}

export default Modal;
