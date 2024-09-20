import React from 'react'
import { Content } from '../../../../components/layout/components/Content'
import { KTIcon } from '../../../../components/helpers'

const PhotoItem: React.FC<{ imageSrc: string, altText: string }> = ({ imageSrc, altText }) => (
  <div className='position-relative'>
    <img src={imageSrc} alt={altText} className='img-fluid rounded' />
    <button className='btn btn-light position-absolute top-0 end-0 m-2'>
      <i className='bi bi-pencil'></i>
    </button>
  </div>
)

export function PhotoPage() {
  const photos = [
    { src: 'https://images.unsplash.com/photo-1723441857662-d465a52e78d0?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Foto 1' },
    { src: 'https://images.unsplash.com/photo-1723441857662-d465a52e78d0?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Foto 2' },
    { src: 'https://images.unsplash.com/photo-1723441857662-d465a52e78d0?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Foto 3' },
    // Agrega más fotos según sea necesario
  ]

  return (
    <Content>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Mis Fotos
          <span className='fs-6 text-gray-500 fw-bold ms-1'>{photos.length}</span>
        </h3>

        <div className='d-flex my-2'>
          <div className='d-flex align-items-center position-relative me-4'>
            <KTIcon iconName='magnifier' className='fs-3 position-absolute ms-3' />
            <input
              type='text'
              id='kt_filter_search'
              className='form-control form-control-white form-control-sm w-150px ps-9'
              placeholder='Buscar'
            />
          </div>

          <a className='btn btn-primary btn-sm'>
            Subir foto
          </a>
        </div>
      </div>

      <div className='row g-6 g-xl-9 mb-6 mb-xl-9'>
        {photos.map((photo, index) => (
          <div className='col-12 col-sm-6 col-xl-3' key={index}>
            <PhotoItem imageSrc={photo.src} altText={photo.alt} />
          </div>
        ))}
      </div>
    </Content>
  )
}
