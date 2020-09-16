import React from 'react';

import { IconProps } from '../types';

const Json = ({ width, height, opacity, fill }: IconProps) => (
  <svg width={width} height={height} opacity={opacity} viewBox="0 0 100 100">
    <path
      fill={fill}
      d="M4.55908818,64.7740452 C6.23875225,64.7740452 7.69846031,64.5107645 8.93821236,63.9842032 C10.1779644,63.4576418 11.2077584,62.7177898 12.0275945,61.7646471 C12.8474305,60.8115044 13.4606412,59.6683997 13.8672266,58.3353329 C14.2738119,57.0022662 14.4771046,55.5225622 14.4771046,53.8962208 L14.4771046,53.8962208 L14.4771046,35.319936 L7.71845631,35.319936 L7.71845631,54.0361928 C7.71845631,55.0359928 7.63847231,55.8758248 7.4785043,56.5556889 C7.31853629,57.2355529 7.07858428,57.7854429 6.75864827,58.2053589 C6.43871226,58.6252749 6.03545957,58.925215 5.54889022,59.105179 C5.06232087,59.285143 4.49243485,59.375125 3.83923215,59.375125 C3.3726588,59.375125 2.97273879,59.3384656 2.63947211,59.265147 C2.30620543,59.1918283 2.02626141,59.155169 1.79964007,59.155169 C1.35972805,59.155169 1.01979604,59.2618143 0.779844031,59.475105 C0.539892022,59.6883957 0.399920016,59.9683397 0.359928014,60.314937 L0.359928014,60.314937 L0,64.2541492 C0.799840032,64.4407785 1.56968606,64.5740852 2.30953809,64.6540692 C3.04939012,64.7340532 3.79924015,64.7740452 4.55908818,64.7740452 Z M27.5744851,64.7740452 C29.2274878,64.7740452 30.7038592,64.5240952 32.0035993,64.0241952 C33.3033393,63.5242951 34.396454,62.8377658 35.2829434,61.9646071 C36.1694328,61.0914484 36.8459641,60.0683197 37.3125375,58.895221 C37.7791108,57.7221222 38.0123975,56.4623742 38.0123975,55.1159768 C38.0123975,53.9028861 37.8257682,52.8664267 37.4525095,52.0065987 C37.0792508,51.1467706 36.5893488,50.4169166 35.9828034,49.8170366 C35.3762581,49.2171566 34.6830634,48.7239219 33.9032194,48.3373325 C33.1233753,47.9507432 32.326868,47.6141438 31.5136973,47.3275345 C30.7005266,47.0409251 29.9040192,46.7809771 29.1241752,46.5476905 C28.3443311,46.3144038 27.6511364,46.0577884 27.0445911,45.7778444 C26.4380457,45.4979004 25.9481437,45.1646337 25.574885,44.7780444 C25.2016263,44.391455 25.014997,43.9048857 25.014997,43.3183363 C25.014997,42.3985203 25.324935,41.6686663 25.944811,41.1287742 C26.5646871,40.5888822 27.5078318,40.3189362 28.7742452,40.3189362 C29.5074318,40.3189362 30.1606345,40.4155835 30.7338532,40.6088782 C31.3070719,40.8021729 31.8169699,41.0187962 32.2635473,41.2587483 C32.7101246,41.4987003 33.1100447,41.7153236 33.4633073,41.9086183 C33.81657,42.101913 34.146504,42.1985603 34.4531094,42.1985603 C34.7997067,42.1985603 35.0829834,42.1185763 35.3029394,41.9586083 C35.5228954,41.7986403 35.7328534,41.5586883 35.9328134,41.2387522 L35.9328134,41.2387522 L37.6124775,38.0993801 C37.0925815,37.6194761 36.5026995,37.1895621 35.8428314,36.8096381 C35.1829634,36.4297141 34.4731054,36.1031127 33.7132573,35.829834 C32.9534093,35.5565554 32.1502366,35.34993 31.3037393,35.209958 C30.4572419,35.069986 29.5874159,35 28.6942611,35 C27.0945811,35 25.674865,35.2432847 24.435113,35.729854 C23.1953609,36.2164234 22.1489036,36.8662934 21.2957409,37.6794641 C20.4425782,38.4926348 19.7960408,39.4191162 19.3561288,40.4589082 C18.9162168,41.4987003 18.6962607,42.5651536 18.6962607,43.6582683 C18.6962607,45.0179964 18.8828901,46.1611011 19.2561488,47.0875825 C19.6294075,48.0140639 20.1193095,48.7872426 20.7258548,49.4071186 C21.3324002,50.0269946 22.0222622,50.5268946 22.7954409,50.9068186 C23.5686196,51.2867427 24.3617943,51.6066787 25.174965,51.8666267 C25.9881357,52.1265747 26.7813104,52.363194 27.5544891,52.5764847 C28.3276678,52.7897754 29.0175298,53.0363927 29.6240752,53.3163367 C30.2306205,53.5962807 30.7205226,53.9495434 31.0937812,54.3761248 C31.4670399,54.8027061 31.6536693,55.3559288 31.6536693,56.0357928 C31.6536693,57.2088916 31.3137373,58.0653869 30.6338732,58.6052789 C29.9540092,59.145171 29.0008665,59.415117 27.7744451,59.415117 C26.8679597,59.415117 26.0814504,59.2884756 25.414917,59.035193 C24.7483837,58.7819103 24.1585016,58.5019663 23.6452709,58.1953609 C23.1320403,57.8887556 22.6721322,57.6088116 22.2655469,57.3555289 C21.8589615,57.1022462 21.4557089,56.9756049 21.0557888,56.9756049 C20.7491835,56.9756049 20.4659068,57.0522562 20.2059588,57.2055589 C19.9460108,57.3588616 19.7360528,57.5488236 19.5760848,57.7754449 L19.5760848,57.7754449 L17.5764847,60.934813 C18.1497034,61.5080317 18.8229021,62.0279277 19.5960808,62.4945011 C20.3692595,62.9610745 21.1957608,63.3643271 22.0755849,63.7042591 C22.9554089,64.0441912 23.865227,64.3074718 24.805039,64.4941012 C25.744851,64.6807305 26.6679997,64.7740452 27.5744851,64.7740452 Z M55.4689062,64.7740452 C57.7351196,64.7740452 59.7980404,64.3941212 61.6576685,63.6342731 C63.5172965,62.8744251 65.1069786,61.8246351 66.4267147,60.484903 C67.7464507,59.145171 68.7695794,57.5688196 69.4961008,55.7558488 C70.2226221,53.9428781 70.5858828,51.98327 70.5858828,49.8770246 C70.5858828,47.7841098 70.2226221,45.8311671 69.4961008,44.0181964 C68.7695794,42.2052256 67.7464507,40.6322069 66.4267147,39.2991402 C65.1069786,37.9660735 63.5172965,36.9162834 61.6576685,36.14977 C59.7980404,35.3832567 57.7351196,35 55.4689062,35 C53.2026928,35 51.1364394,35.379924 49.270146,36.139772 C47.4038526,36.8996201 45.8075052,37.9460775 44.4811038,39.2791442 C43.1547024,40.6122109 42.128241,42.1852296 41.4017197,43.9982004 C40.6751983,45.8111711 40.3119376,47.7707792 40.3119376,49.8770246 C40.3119376,51.98327 40.6751983,53.9428781 41.4017197,55.7558488 C42.128241,57.5688196 43.1547024,59.145171 44.4811038,60.484903 C45.8075052,61.8246351 47.4038526,62.8744251 49.270146,63.6342731 C51.1364394,64.3941212 53.2026928,64.7740452 55.4689062,64.7740452 Z M55.4689062,59.175165 C54.1625008,59.175165 52.9994001,58.965207 51.9796041,58.5452909 C50.959808,58.1253749 50.09998,57.5154969 49.40012,56.7156569 C48.7002599,55.9158168 48.1637006,54.9393455 47.7904419,53.7862428 C47.4171832,52.63314 47.2305539,51.3300673 47.2305539,49.8770246 C47.2305539,48.4373125 47.4171832,47.1409052 47.7904419,45.9878024 C48.1637006,44.8346997 48.7002599,43.8582284 49.40012,43.0583883 C50.09998,42.2585483 50.959808,41.6453376 51.9796041,41.2187562 C52.9994001,40.7921749 54.1625008,40.5788842 55.4689062,40.5788842 C56.7619809,40.5788842 57.9150836,40.7921749 58.9282144,41.2187562 C59.9413451,41.6453376 60.7978404,42.2585483 61.4977005,43.0583883 C62.1975605,43.8582284 62.7341198,44.8346997 63.1073785,45.9878024 C63.4806372,47.1409052 63.6672665,48.4373125 63.6672665,49.8770246 C63.6672665,51.3300673 63.4806372,52.63314 63.1073785,53.7862428 C62.7341198,54.9393455 62.1975605,55.9158168 61.4977005,56.7156569 C60.7978404,57.5154969 59.9413451,58.1253749 58.9282144,58.5452909 C57.9150836,58.965207 56.7619809,59.175165 55.4689062,59.175165 Z M80.5238952,64.4541092 L80.5238952,48.8372326 C80.5238952,48.4106512 80.5138972,47.9540759 80.4939012,47.4675065 C80.4739052,46.9809371 80.4372459,46.4777045 80.3839232,45.9578084 L80.3839232,45.9578084 L94.1211758,63.3343331 C94.4677731,63.7475838 94.8177031,64.0375258 95.1709658,64.2041592 C95.5242285,64.3707925 95.9608078,64.4541092 96.4807039,64.4541092 L96.4807039,64.4541092 L100,64.4541092 L100,35.319936 L94.0411918,35.319936 L94.0411918,50.7368526 C94.0411918,51.203426 94.0545224,51.6999933 94.0811838,52.2265547 C94.1078451,52.753116 94.1545024,53.2963407 94.2211558,53.8562288 L94.2211558,53.8562288 L80.3639272,36.3597281 C80.1772979,36.1331067 80.0106645,35.9531427 79.8640272,35.819836 C79.7173899,35.6865294 79.5640872,35.5832167 79.4041192,35.509898 C79.2441512,35.4365794 79.0641872,35.3865893 78.8642272,35.359928 C78.6642671,35.3332667 78.4176498,35.319936 78.1243751,35.319936 L78.1243751,35.319936 L74.565087,35.319936 L74.565087,64.4541092 L80.5238952,64.4541092 Z"
    />
  </svg>
);

export default Json;