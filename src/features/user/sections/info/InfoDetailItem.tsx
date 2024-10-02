
interface InfoDetailItemProps {
  icon: string;
  title: any;
  subtitle: string;
  privacyIcon?: string;
}

export const InfoDetailUserItem: React.FC<InfoDetailItemProps> = ({ icon, title, subtitle }) => {

  return (
    <div className="d-flex align-items-center mb-3 position-relative cursor-pointer">
      <i className={`bi ${icon} me-3`} style={{ fontSize: '1.5rem' }}></i>
      <div>
        <h6 className="mb-0 fw-bold">{title}</h6>
        <small className="text-muted">{subtitle}</small>
      </div>
    </div>
  );
};
