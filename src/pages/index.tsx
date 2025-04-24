import { Button } from "@/components/ui/button"
import { RadioPlayer } from "@/components/radio-player"
import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-6xl">🪷</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-amber-900">
            ยินดีต้อนรับสู่ <span className="font-medium">ธรรมะสวัสดี</span>
          </h1>
          <p className="text-xl text-amber-800 mb-8">
            ค้นพบความสงบภายในและปัญญาผ่านการเชื่อมโยงอย่างมีสติ
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-8 bg-amber-700 hover:bg-amber-800 text-white">
              เริ่มต้นการเดินทาง
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-amber-700 text-amber-700 hover:bg-amber-50">
              เรียนรู้เพิ่มเติม
            </Button>
          </div>
        </div>
      </section>

      {/* Radio Player Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <RadioPlayer />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 text-amber-900">
            เส้นทางสู่การตรัสรู้
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">🧘</div>
                <CardTitle className="text-xl text-amber-900">สติ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800">
                  ฝึกฝนการมีสติและความตระหนักรู้ในทุกช่วงเวลาของการเดินทาง
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">📿</div>
                <CardTitle className="text-xl text-amber-900">ปัญญา</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800">
                  เพิ่มพูนความเข้าใจและปัญญาผ่านประสบการณ์ที่แบ่งปัน
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">🕊️</div>
                <CardTitle className="text-xl text-amber-900">ความสงบ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800">
                  ค้นพบความสมดุลและความสงบในชีวิตประจำวันและความสัมพันธ์
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="text-6xl">☸️</span>
          </div>
          <h2 className="text-3xl font-light mb-6 text-amber-900">
            เริ่มต้นการเดินทางทางจิตวิญญาณของคุณ
          </h2>
          <p className="text-xl text-amber-800 mb-8 max-w-2xl mx-auto">
            เข้าร่วมชุมชนของผู้ที่มีสติบนเส้นทางสู่การตรัสรู้
          </p>
          <Button size="lg" className="px-12 bg-amber-700 hover:bg-amber-800 text-white">
            เริ่มต้นตอนนี้
          </Button>
        </div>
      </section>
    </Layout>
  );
}
