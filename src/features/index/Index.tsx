import { FC, lazy, LazyExoticComponent, ReactElement, Suspense, useEffect } from 'react';
import { IHeader } from '../../shared/header/interfaces/header.interface';
import CircularPageLoader from '../../shared/page-loader/CircularPageLoader';
import { saveToSessionStorage } from '../../shared/utils/utils.service';

const IndexHeader: LazyExoticComponent<FC<IHeader>> = lazy(() => import('../../shared/header/components/Header'));

const Index: FC = (): ReactElement => {
  useEffect(() => {
    saveToSessionStorage(JSON.stringify(false), JSON.stringify(''));
  }, []);

  return (
    <div className="">
      <Suspense fallback={<CircularPageLoader />}>
        <IndexHeader navClass="" />
      </Suspense>
    </div>
  );
};

export default Index;
