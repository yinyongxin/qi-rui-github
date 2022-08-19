import { useLocale } from '@/utils/hooks';
import { Modal, SideMenu } from 'qirui-digitization-ui';
import { ModalHandle } from 'qirui-digitization-ui/dist/Modal/interface';
import './index.less';
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { ModalType } from '../../types';
import Cropper from 'react-cropper';

import 'cropperjs/dist/cropper.css';
const defaultSrc = 'images/info.png';
const ModalComment = (props, ref) => {
  const locale = useLocale();
  const ModalRef = useRef<ModalHandle>();
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState('#');
  const [cropper, setCropper] = useState<any>();
  const cropperRef = useRef<HTMLImageElement>(null);
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
      onOK={() => {
        const imageElement: any = cropperRef?.current;
        const cropper: any = imageElement?.cropper;
        console.log(cropper.getCroppedCanvas().toDataURL());
        // console.log(cropper);
        // let res = cropper.getCroppedCanvas().toDataURL();
        // console.log(res);
      }}
    >
      <div className="title">{locale('information.image.format')}</div>
      <div className="chooseImage">{locale('information.choose.image')}</div>
      <div className="frontImage">
        <div className="oneImage">
          <Cropper
            style={{ height: 160, width: '100% ' }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
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
    </Modal>
  );
};
export default forwardRef(ModalComment);
