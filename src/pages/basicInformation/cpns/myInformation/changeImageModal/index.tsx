import { useAppDispatch, useAppSelector, useLocale } from '@/utils/hooks';
import { Modal, SideMenu } from 'qirui-digitization-ui';
import { ModalHandle } from 'qirui-digitization-ui/dist/Modal/interface';
import './index.less';
import React, {
  FC,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { changePropsType, ModalType } from '../../types';
import Cropper from 'react-cropper';

import 'cropperjs/dist/cropper.css';
import { LoginApi } from '@/services';
import { userActions } from '@/store/userSlice';
import FormComp from 'qirui-digitization-ui/dist/Form';

const ModalComment: ForwardRefRenderFunction<unknown, changePropsType> = (props, ref) => {
  const locale = useLocale();
  const dispatch = useAppDispatch();
  const ModalRef = useRef<ModalHandle>();
  const fileInput = useRef<HTMLInputElement>();
  const [image, setImage] = useState(props.image);
  const [cropData, setCropData] = useState('#');
  const [cropper, setCropper] = useState<any>();
  const cropperRef = useRef<HTMLImageElement>(null);
  const { info } = useAppSelector((state) => state.user);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (result: any) {
      console.log(result?.target?.result);
      setImage(result?.target?.result)
      // imgRef.current.init(result?.target?.result);
    };
  };
  const init = () => {
    ModalRef.current?.open();
  };
  useImperativeHandle<any, ModalType>(ref, () => ({
    init,
  }));
  return (
    <Modal
      title={locale('information.modify.avatar')}
      ref={ModalRef}
      width={608}
      mianStyle={{
        height: '402px',
        paddingLeft: '48px',
        boxSizing: 'border-box',
        paddingTop: '32px',
      }}
      onOK={async () => {
        const imageElement: any = cropperRef?.current;
        const cropper: string = imageElement?.cropper.getCroppedCanvas().toDataURL();
        try {
          await LoginApi.uploadOneFile(cropper)
          const res = await LoginApi.sysUser({ userId: info?.id })
          localStorage.setItem('user', JSON.stringify(res.data))
          dispatch(userActions.updater(res.data))
          ModalRef.current?.close();
        } catch (error) {

        }


      }}
    >
      <div className="title">{locale('information.image.format')}</div>

      <div className="chooseImage" onClick={() => {
        fileInput.current?.click()
      }}>{locale('information.choose.image')}</div>
      <div className="frontImage">
        <div className="oneImage">
          <Cropper
            style={{ height: 160, width: '100% ' }}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            checkCrossOrigin={false}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            ref={cropperRef}
            guides={true}
          />
        </div>
        <div className="twoImage">
          <div className="previewTitle">
            {locale('information.avatar.preview')}
          </div>
          <div className="img-preview"></div>
        </div>
        <div className="threeImage">
          <div className="img-preview"></div>
        </div>
      </div>
      <div className="dropImage">{locale('information.drop.preview')}</div>
      <input
        type="file"
        ref={fileInput}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </Modal>
  );
};
export default forwardRef(ModalComment);


