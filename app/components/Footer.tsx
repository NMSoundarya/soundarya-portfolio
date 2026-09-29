// export default function Footer() {
//   return (
//     <footer id="contact" className="border-t border-gray-200 px-8 py-10 text-center text-sm text-gray-500">
//       <p>Soundarya Mahadev — Senior Software Engineer</p>
//       <p className="mt-2">
//         
//       </p>
//     </footer>
//   );
// }
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-8 py-10 text-center text-sm text-gray-500">
      <p>Soundarya Mahadev — Senior Software Engineer</p>
      <p className="mt-2">© {new Date().getFullYear()} Soundarya Mahadev</p>
    </footer>
  );
}