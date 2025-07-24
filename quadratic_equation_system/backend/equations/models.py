from django.db import models
import math
import json

class Equation(models.Model):
    a = models.DecimalField(max_digits=10, decimal_places=6)
    b = models.DecimalField(max_digits=10, decimal_places=6)
    c = models.DecimalField(max_digits=10, decimal_places=6)
    result = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def solve(self):
        """Giải phương trình bậc 2: ax² + bx + c = 0"""
        a, b, c = float(self.a), float(self.b), float(self.c)
        
        if a == 0:
            if b == 0:
                if c == 0:
                    return "Vô số nghiệm"
                else:
                    return "Vô nghiệm"
            else:
                x = -c / b
                return f"x = {x:.15g}"
        
        # Tính delta
        delta = b * b - 4 * a * c
        
        if delta < 0:
            return "Vô nghiệm"
        elif delta == 0:
            x = -b / (2 * a)
            return f"x = {x:.15g}"
        else:
            sqrt_delta = math.sqrt(delta)
            x1 = (-b + sqrt_delta) / (2 * a)
            x2 = (-b - sqrt_delta) / (2 * a)
            return f"x1 = {x1:.15g}, x2 = {x2:.15g}"

    def save(self, *args, **kwargs):
        """Tự động tính kết quả khi lưu"""
        self.result = self.solve()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.a}x² + {self.b}x + {self.c} = 0"

    class Meta:
        ordering = ['-created_at']
