import './maintenance.css';

const Maintenance = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div className='maintenance-container'>
      <div className='maintenance-content'>
        <h1>{pageTitle} Page</h1>
        <p>We are currently working on this page. Please check back later!</p>
      </div>
    </div>
  );
};

export default Maintenance;
