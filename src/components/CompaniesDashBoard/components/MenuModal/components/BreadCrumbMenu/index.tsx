import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}
interface IBreadCrumbMenuProps{
  setSelectedPortal: any
}
export default function BreadCrumbMenu({setSelectedPortal}: IBreadCrumbMenuProps) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', fontSize: "12px" }}
          color="inherit"
          // href="/"
        onClick={() => setSelectedPortal("portal1")}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Companhia
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', fontSize: "12px" }}
          color="inherit"
          // href="/material-ui/getting-started/installation/"
          onClick={() => setSelectedPortal("portal2")}
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Funcionários
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', fontSize: "12px" }}
          color="inherit"
          // href="/material-ui/getting-started/installation/"
          onClick={() => setSelectedPortal("portal3")}
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Movimentações
        </Link>
        {/* <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
        </Typography> */}
      </Breadcrumbs>
    </div>
  );
}
