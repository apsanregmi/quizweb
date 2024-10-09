import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WaitlistForm from '../components/WaitlistForm';

export default function Home() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <WaitlistForm />
    </div>
  );
}
