import clases.Algoritmos;

public class Aplicacion {
    public static void main(String[] args) {
        System.out.println("esPar(4): " + Algoritmos.esPar(4));
        System.out.println("esPar(7): " + Algoritmos.esPar(7));

        System.out.println("esPrimo(11): " + Algoritmos.esPrimo(11));
        System.out.println("esPrimo(12): " + Algoritmos.esPrimo(12));

        System.out.println("stringEnReversa('Hueso'): " + Algoritmos.stringEnReversa("Hueso"));

        System.out.println("esPalindromo('arepera'): " + Algoritmos.esPalindromo("arepera"));
        System.out.println("esPalindromo('tierra'): " + Algoritmos.esPalindromo("tierra"));

        System.out.print("Secuencia FizzBuzz hasta 15: ");
        Algoritmos.secuenciaFizzBuzz(15);
    }
}