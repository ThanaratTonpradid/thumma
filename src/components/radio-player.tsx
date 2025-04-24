import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

export function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-amber-100">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-4xl">📻</div>
            <div>
              <CardTitle className="text-xl text-amber-900">วิทยุธรรมะออนไลน์</CardTitle>
              <CardDescription className="text-amber-800">ฟังธรรมะสด 25 ชั่วโมง</CardDescription>
            </div>
          </div>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            size="icon"
            className="bg-amber-700 hover:bg-amber-800 text-white"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-amber-800">
            <span>สถานี:</span>
            <span className="font-medium">ธรรมะสวัสดี FM 95.5</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-amber-800">
            <span>รายการ:</span>
            <span className="font-medium">ธรรมะเพื่อชีวิต</span>
          </div>
        </div>

        {/* Audio element will be added here when implementing actual streaming */}
        {isPlaying && (
          <audio
            src="https://example.com/dharma-radio-stream" // Replace with actual stream URL
            autoPlay
            className="hidden"
          />
        )}
      </CardContent>
    </Card>
  );
} 