function Modal(props) {
   // props에서 온 걸 그대로 실행할 수 있지만
   // wrapper 형태로 별도의 함수를 재선언해서 사용할 수 있다.
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className='modal'>
      <p>Are your sure?</p>
      <button className='btn btn--all' onClick={cancelHandler}>Cancel</button>
      <button className='btn'          onClick={confirmHandler}>Confirm</button>
    </div>
  );
}

export default Modal;
