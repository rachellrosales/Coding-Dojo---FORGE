import clases.Persona;
import clases.CuentaBancaria;

public class Aplicacion {
    public static void main(String[] args) {
        Persona persona1 = new Persona("Patricia", 30);
        Persona persona2 = new Persona("Victor", 25);
        Persona persona3 = new Persona("José", 35);

        CuentaBancaria cuenta1 = new CuentaBancaria(1000.0, persona1);
        CuentaBancaria cuenta2 = new CuentaBancaria(2000.0, persona2);
        CuentaBancaria cuenta3 = new CuentaBancaria(3000.0, persona3);

        cuenta1.depositar(500.0);
        cuenta2.retirar(1000.0);
        cuenta3.retirar(3500.0);

        System.out.println("Saldo actual de las cuentas:");
        System.out.println("Cuenta de Patricia: " + cuenta1.getSaldo());
        System.out.println("Cuenta de Victor: " + cuenta2.getSaldo());
        System.out.println("Cuenta de Jose: " + cuenta3.getSaldo());

        System.out.println("\nInformación de todas las cuentas:");
        CuentaBancaria.imprimeInformacionDeTodasLasCuentas();
    }
}