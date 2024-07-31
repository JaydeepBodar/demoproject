/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./wp-templates/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
		fontFamily: {
			SegoeUI: ["Segoe UI", "sans-serif"],
			Georgia: ["Georgia", "sans-serif"]
		},
		fontWeight: {
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			Extrabold: 800 , 
			black: 900,
		},
		extend: {
			scale: {
				'1001': '1.001',
			  },
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				  },
				screens: {
					sm: "100%",
					md: "100%",
					'2xl': "1500px",
				}
			},
			colors: {
				primarybgcolor:'#0c1c37',
				secondarycolor:'#428628',
				lightgray:'#D6D6D6',
				bodyfontcolor:'#505050',
				secbodyfontcolor:'#999999',
				lightsky:'#F5F7FA',
				bdr_color:'#cccccc',
				md_gray:'#F1F2F3',
				dark_gray:'#f0f0f0',
				light_black:'#1a1a1a',	
				extra_color: '#3b3b3b',			
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(180deg, rgba(245, 247, 250, 1) 0%, rgba(245, 247, 250, 1) 0.89%, rgba(245, 247, 250, 1) 0.91%)',
			},
			fontSize:{
			   '0_fs':   ['0px','0px'],
				sm_fs:   ['16px','24px'],
				base_fs: ['18px','24px'],
				'19_fs': ['19px','27px'],
				'20_fs': ['20px', '30px'],
				xl_fs:   ['22px','32px'],
				xl05:   ['30px','39px'],
				xl1_fs:  ['35px','40px'],
				'36_fs': ['36px','41px'],
				x39_fs:  ['39px','45px'],
				xl01_fs: ['42px','48px'],
				xl2_fs:  ['45px','50px'],
				'50_fs': ['50px', '65px'],
				xl3_fs:  ['55px','60px'],
				xl4_fs:  ['60px','65px'], 
				xl5_fs:  ['70px','75px'], 
				
			},
			lineHeight: {
				24: '24px',
				27: '27px',
				30: '30px',
				34: '34px',
				40: '40px',
				48: '48px',
				60: '60px',
			},
			padding: {
				'10p' :  '10px',
				'11p' :  '11px',
				'20p' :  '20px',
				'50p' :  '50px',
				'60p' :  '60px',
				'100p':  '100px',
				'140p':  '140px',
			},
			margin: {
				'10m' :  '10px',
				'20m' :  '20px',
				'50m' :  '50px',
				'100m':  '100px',
			},
			minWidth: {
				'minauto': 'auto',
			},
			minHeight: {
				'minauto': 'auto',
			},
			zIndex: {
               z1: '1'
			},
			backgroundSize:{
				'7bz': '7px',
               '17bz':'17px'
			},
			height: {
               '140h_cal': 'calc(100% - 140px)',
			   'h_auto': 'auto',
			   '180': '180px',
			   '300': '300px',
			   '660': '660px',
			},
			screens: {
				'sm': '600px',
				'md': '768px',
				'lg': '992px',
				'xl': '1280px',
				'2xl': '1536px',

				'desktop_large': {'max': '1450px'},

				'desktop_min': {'max': '1366px'},

				'desktop': {'max': '1280px'},

				'desktop-smalll': {'max': '1150px'},

				'tablet-large': {'max': '1024px'}, 
				
				'tablet': {'max': '999px'},

				'mobile': {'max': '767px'},

				'mobile-l': {'max': '639px'},
				 
				'mobile-small': {'max': '479px'},
					
			},
			width: {
               img_wid:'calc(100% - 126px)',
			   img_wid_1280:'calc(100% - 150px )',
			   boxes_view:'calc(33.33% - 27px)',
			   desk_boxes_view:'calc(33.33% - 27px)',
			   tablet_box:'calc(50% - 16px)',
			},
			maxWidth: {
				'800px' : '800px',
			},
			boxShadow: {
				'3xl': '0 0 4px rgba(0, 0, 0, 0.2)',
				'4xl': '0px 0px 20px rgb(0 0 0 / 12%)',
				'partner-shadow':'0px 0px 20px #00000029',
				'tab-boxshadow':'0 0 0 1px #ddd',
				'card-shadow':'0 11px 21px -6px rgba(0,0,0,.1)',
				'cont-card':'0px 0px 10px #00000026',
			},
			transition:{
				transition_all:'all 0.3s ease',		
			},						
			transitionDuration: {
				3000: '3000ms',			
				'350': '350ms',
			},			
		
			scale: ['group-hover'],
			borderWidth: ['hover'],	
			grayscale: ['hover']
		}
	},
  plugins: [
	function({ addUtilities }) {
		addUtilities({		
		  '.works-blocks': {
			counterReset: 'section',
			},			
		  '.blocks-count:before': {
			counterIncrement: 'section',
			content: '"0" counter(section)',
			'-webkit-text-stroke': '1px #fff',
			'-webkit-text-fill-color': 'transparent',
			fontSize: '39px',
			lineHeight: '45px',
			fontWeight: '600',
			opacity: '0.2',
		  },		
		})
	  }
  ],
}

