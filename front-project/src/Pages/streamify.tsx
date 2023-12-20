import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../component/presentation.css";

function Presentation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 9000); // Cambia questo valore per farlo coincidere con la durata dell'animazione CSS

    return () => clearTimeout(timer); // Pulisce il timer se il componente viene smontato
  }, [navigate]);

  return (
    <div className="presentation ">
    <svg className="logo1" xmlns="http://www.w3.org/2000/svg" width="170" height="222" viewBox="0 0 170 222" fill="none">
<path d="M156.721 101.638C163.059 106.48 163.004 116.04 156.611 120.799L61.5772 191.548C53.6365 197.46 42.3503 191.746 42.407 181.843L43.2235 39.1178C43.2801 29.2148 54.6309 23.6477 62.5034 29.6618L156.721 101.638Z" fill="#53BB90"/>
<path d="M83.3974 75C87.3774 75 91.0373 75.5926 94.3771 76.7776C97.7169 77.9627 100.723 78.733 103.395 79.0885C101.92 84.5991 101.864 90.5392 103.228 96.9089C101.808 98.1829 100.18 98.9235 98.3431 99.1309C98.1205 98.568 97.7169 97.3978 97.1325 95.6202C96.5758 93.8129 96.0331 92.3316 95.5043 91.1762C95.0033 90.0207 94.2936 88.7023 93.3751 87.221C92.4845 85.7397 91.2877 84.5694 89.7848 83.7103C88.3097 82.8215 86.612 82.2141 84.6916 81.8882C81.8806 82.1549 79.7097 83.0733 78.1789 84.6435C76.6482 86.2137 75.8828 88.2431 75.8828 90.7318C75.8828 93.2797 76.4951 95.3831 77.7197 97.0422C78.9443 98.6717 80.5307 99.9012 82.4789 100.731C84.455 101.531 86.6259 102.242 88.9916 102.864C91.3573 103.456 93.7091 104.197 96.047 105.086C98.3849 105.945 100.528 107.086 102.476 108.508C104.452 109.9 106.053 111.989 107.277 114.774C108.502 117.559 109.114 120.951 109.114 124.951C109.114 129.809 107.792 133.987 105.148 137.483C102.504 140.979 99.3868 143.482 95.7965 144.993C92.2062 146.504 88.5324 147.259 84.7751 147.259C76.509 147.259 68.3264 145.319 60.2273 141.438C60.3943 137.616 60.4778 135.275 60.4778 134.416C60.4778 129.617 60.0464 124.462 59.1836 118.951C61.6885 117.677 64.4856 117.618 67.5749 118.773C68.6047 125.499 70.5947 130.654 73.5449 134.238C76.5229 137.823 79.7792 139.823 83.3139 140.238C86.6259 140.001 89.1725 138.86 90.9538 136.816C92.7628 134.742 93.6674 132.12 93.6674 128.95C93.6674 126.284 93.0829 124.032 91.914 122.195C90.745 120.329 89.2004 118.892 87.2799 117.885C85.3595 116.848 83.2722 115.914 81.0178 115.085C78.7912 114.255 76.5368 113.381 74.2546 112.463C71.9724 111.515 69.8711 110.389 67.9507 109.085C66.0581 107.782 64.5274 105.96 63.3584 103.619C62.1895 101.279 61.605 98.4347 61.605 95.0869C61.605 92.065 62.0503 89.3541 62.9409 86.9544C63.8594 84.5546 65.0422 82.6289 66.4895 81.1772C67.9646 79.7255 69.6763 78.5108 71.6245 77.5331C73.6006 76.5554 75.5488 75.8888 77.4692 75.5333C79.4174 75.1778 81.3935 75 83.3974 75ZM83.3974 76.8221C81.0595 76.8221 78.7912 77.1183 76.5925 77.7109C74.3938 78.2738 72.2507 79.207 70.1633 80.5106C68.1038 81.8142 66.4478 83.7251 65.1953 86.2433C63.9429 88.7616 63.3167 91.7094 63.3167 95.0869C63.3167 98.0792 63.9011 100.657 65.0701 102.819C66.239 104.953 67.7698 106.612 69.6623 107.797C71.5827 108.982 73.6841 110.034 75.9663 110.952C78.2485 111.841 80.5029 112.744 82.7294 113.663C84.9838 114.581 87.0712 115.618 88.9916 116.774C90.912 117.929 92.4567 119.544 93.6256 121.618C94.7946 123.662 95.379 126.106 95.379 128.95C95.379 132.89 94.1962 136.075 91.8305 138.505C89.4648 140.934 86.111 142.149 81.7692 142.149C77.5944 142.149 73.7119 140.297 70.1216 136.594C66.5313 132.89 64.1655 127.35 63.0244 119.973C62.4678 119.588 61.8137 119.588 61.0623 119.973C61.8137 124.625 62.1895 129.439 62.1895 134.416C62.1895 135.809 62.1338 137.779 62.0225 140.327C68.9248 143.734 75.507 145.437 81.7692 145.437C86.946 145.437 91.7331 143.808 96.1305 140.549C100.528 137.26 102.727 132.668 102.727 126.773C102.727 123.425 102.114 120.595 100.89 118.285C99.6652 115.944 98.0648 114.122 96.0888 112.818C94.1127 111.515 91.9418 110.389 89.5761 109.441C87.2104 108.493 84.8586 107.604 82.5207 106.775C80.1828 105.915 78.0258 104.967 76.0498 103.93C74.1015 102.893 72.5151 101.427 71.2905 99.5309C70.0659 97.6051 69.4536 95.2795 69.4536 92.5538C69.4536 88.732 70.6643 85.6804 73.0857 83.3992C75.507 81.1179 78.9443 79.9773 83.3974 79.9773C91.1347 79.9773 96.4645 85.6804 99.3868 97.0867C100.25 97.2348 100.848 97.0274 101.182 96.4645C100.264 89.2356 98.2457 84.1547 95.1286 81.2216C92.0392 78.2886 88.1288 76.8221 83.3974 76.8221Z" fill="#0071B8"/>
</svg>
      <svg  className="svg1" viewBox="0 0 1320 300" style={{}}>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          streamify
        </text>
      </svg>
    </div>
  );
}

export default Presentation;
